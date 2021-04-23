import React from "react";
import * as Auth from "@elevio/kb-kit/lib/components/auth";
import { useTranslation } from "@elevio/kb-kit/lib/hooks";

function LoginLogout({ className }) {
  const { t } = useTranslation();
  const loginText = t("login", "Log in");
  const logoutText = t("logout", "Log out");
  return (
    <>
      {/* <Auth.AgentLoginLogout
        className={className}
        loginChildren={loginText}
        logoutChildren={logoutText}
      /> */}
      <Auth.LoginLogoutLink
        className={className}
        loginChildren={loginText}
        logoutChildren={logoutText}
      />
    </>
  );
}

export default LoginLogout;
