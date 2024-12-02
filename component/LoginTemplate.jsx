"use client";

import { signInWithGoogle } from "@/firebaseConfing";
import React from "react";

const LoginTemplate = () => {
  return (
    <form>
 

      <button
        onClick={async (e) => {
          e.preventDefault();
          try {
            const user = await signInWithGoogle();
            console.log("Logged in user:", user);
          } catch (error) {
            console.error("Login failed:", error);
          }
        }}
        className="btn btn-success"
      >
        LOG IN WITH GOOGLE
      </button>
    </form>
  );
};

export default LoginTemplate;
