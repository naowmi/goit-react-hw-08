import './App.css'
import { Suspense, lazy, useEffect  } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
import  Layout  from "./Layout/Layout";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader/Loader";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'))
const RegisterPage = lazy(() => import('../pages/Register'))
const LoginPage = lazy(() => import('../pages/Login'))
const ContactsPage = lazy(() => import('../pages/Contacts'))
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'))

export default function App() {

  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      {isRefreshing ? (
        <Loader/> 
      ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts'/>} />
              <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
              <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
              <Route path='*' element={<NotFoundPage/>} />
            </Routes>
          </Suspense>
     )} 
    <ToastContainer />
    </Layout>
     
  )
}