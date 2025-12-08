declare namespace API {
  namespace User {
    // ======================== 登录 ========================
    interface LoginData {
      email: string;
      password: string;
    }

    interface LoginResult {
      /** Token */
      token: string;
    }
  }
}
