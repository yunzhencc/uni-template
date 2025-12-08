import type { RequestClientOptions } from '@yunzhen/request';
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter';
import { axios, defaultResponseInterceptor, RequestClient } from '@yunzhen/request';

axios.defaults.adapter = createUniAppAxiosAdapter();

function createRequestClient(baseURL: string, options?: RequestClientOptions) {
  const client = new RequestClient({
    ...options,
    baseURL,
  });

  // 处理返回的响应数据格式
  client.addResponseInterceptor(
    defaultResponseInterceptor({
      codeField: 'code',
      dataField: 'data',
      successCode: 0,
    }),
  );

  return client;
}

export const request = createRequestClient('/api', {
  responseReturn: 'data',
  timeout: 30 * 1000,
});
