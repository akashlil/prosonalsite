import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export function withPrivet(Component) {
  return function withprivet(props) {
    const user = useSelector((state) => state.firebaseState.user);

    const router = useRouter();
    useEffect(() => {
      if (!user) {
        router.replace("/");
      } else {
        return <Component user={user} {...props} />;
      }
    }),
      [user];
  };
}

// export function withPublic(Component) {
//   return function withpublic(props) {
//     const user = useSelector((state) => state.firebaseState.user);

//     const router = useRouter();
//     if (!user?.email) {
//       router.replace("/login");
//       return;
//     } else {
//       return <Component auth={auth} {...props} />;
//     }
//   };
// }
