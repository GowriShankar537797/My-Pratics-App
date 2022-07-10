import  { Suspense } from 'react'
import { routes } from '../../utils/intex';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {

    return (
        <Routes >
            {routes.map((it, index) => {
                let Component = it.component;
                return (<Route
                    key={`publicRouteOf${index}`}
                    path={it.route}
                    element={
                        <Suspense fallback={<p>loading...</p>}>
                            <Component />
                        </Suspense>
                    }
                />)
            })}
            
        </Routes>
    )
}
export default AppRoutes;
