/* eslint-disable consistent-return */
// import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

// import authCheck from "./middleware/authCheck";

// import authCheck from "./middleware/authCheck";
// import authExp from "./middleware/authExp";

// async function authExp(req) {
//   const respon = NextResponse.next();
//   const token = req.cookies.get("token")?.value;
//   const refreshToken = req.cookies.get("refreshToken")?.value;

//   try {
//     if (token) {
//       const response = await fetch(
//         `https://api.escuelajs.co/api/v1/auth/profile`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       if (response.ok) {
//         const data = await response.json();
//         respon.cookies.set("user", JSON.stringify(data));
//         return respon;
//       }
//       if (response.message === "Unauthorized") {
//         const newResponse = await fetch(
//           "https://api.escuelajs.co/api/v1/auth/refresh-token",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json", // Assuming the content type is JSON
//             },
//             body: JSON.stringify({ refreshToken }),
//           },
//         );
//         const { access_token: newToken, refresh_token: newRefreshToken } =
//           await newResponse.json();
//         respon.cookies.set("token", JSON.stringify(newToken));
//         respon.cookies.set("refreshToken", JSON.stringify(newRefreshToken));

//         return respon;
//       }
//     }
//   } catch (error) {
//     console.log(`🚀🚀🚀!..error`, error);
//   }
// }
// export default authCheck(authExp);

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const newUrl = req.nextUrl.clone();
  const token = req.cookies.get("token");

  if (pathname === "/signin") {
    if (token?.name && token?.value) {
      newUrl.pathname = "/";
      return NextResponse.rewrite(newUrl);
    }
  }
}
