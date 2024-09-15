import React, { useContext, createContext, useEffect, useState } from "react";
import { getAdmin, auth } from "../../firebase.tsx";
import { onAuthStateChanged, User } from "firebase/auth";
import { ref, get } from "firebase/database";
import { database } from "../../firebase.tsx";

export enum AuthStatus {
  Loading,
  SignedIn,
  SignedOut,
}

export interface IAuth {
  authStatus: AuthStatus;
  signIn: () => void;
  signOut: () => void;
}

const defaultState: IAuth = {
  authStatus: AuthStatus.Loading,
  signIn: () => {},
  signOut: () => {},
};

type Props = {
  children?: React.ReactNode;
};

interface AdminData {
  approved: "approved" | "pending" | "rejected";
  // TODO: add other fields
}

export const AuthContext = createContext<IAuth>(defaultState);

export const AuthIsSignedIn = ({ children }: Props) => {
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
};

export const AuthIsNotSignedIn = ({ children }: Props) => {
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
};

const AuthProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.Loading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const adminData = await getAdminData(user);
          if (adminData && adminData.approved === "approved") {
            setAuthStatus(AuthStatus.SignedIn);
          } else {
            setAuthStatus(AuthStatus.SignedOut);
          }
        } catch (e) {
          console.error("Error checking admin status:", e);
          setAuthStatus(AuthStatus.SignedOut);
        }
      } else {
        setAuthStatus(AuthStatus.SignedOut);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = () => setAuthStatus(AuthStatus.SignedIn);
  const signOut = () => setAuthStatus(AuthStatus.SignedOut);

  const value: IAuth = {
    authStatus,
    signIn,
    signOut,
  };

  if (authStatus === AuthStatus.Loading) {
    return null; // or a loading spinner
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Function to get admin data from Realtime Database
async function getAdminData(user: User): Promise<AdminData | null> {
  const adminRef = ref(database, `admin/${user.uid}`);
  const snapshot = await get(adminRef);
  if (snapshot.exists()) {
    return snapshot.val() as AdminData;
  }
  return null;
}

export default AuthProvider;

// import React, { useContext, createContext, useEffect, useState } from "react";
// import { getAdmin } from "../../firebase.tsx";

// export enum AuthStatus {
//   Loading,
//   SignedIn,
//   SignedOut,
// }

// export interface IAuth {
//   authStatus?: AuthStatus;
//   signIn?: any;
//   signOut?: any;
// }

// const defaultState: IAuth = {
//   authStatus: AuthStatus.Loading,
// };

// type Props = {
//   children?: React.ReactNode;
// };

// export const AuthContext = createContext(defaultState);

// //this is layer of protection around children components
// export const AuthIsSignedIn = ({ children }: Props) => {
//   const { authStatus }: IAuth = useContext(AuthContext);
//   return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
// };

// export const AuthIsNotSignedIn = ({ children }: Props) => {
//   const { authStatus }: IAuth = useContext(AuthContext);
//   return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
// };

// const AuthProvider = ({ children }: Props) => {
//   const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);

//   useEffect(() => {
//     async function getUser() {
//       try {
//         const res = await getAdmin();
//         console.log("user is signed in and approved");
//         setAuthStatus(AuthStatus.SignedIn);
//       } catch (e) {
//         console.log("error in getuser. setting auth status to signed out.");
//         setAuthStatus(AuthStatus.SignedOut);
//       }
//     }
//     getUser().then();
//   }, [setAuthStatus, authStatus]);

//   function signIn() {
//     setAuthStatus(AuthStatus.SignedIn);
//   }
//   function signOut() {
//     setAuthStatus(AuthStatus.SignedOut);
//   }

//   const state: IAuth = {
//     authStatus,
//     signIn,
//     signOut,
//   };

//   if (authStatus === AuthStatus.Loading) {
//     return null;
//   }
//   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
