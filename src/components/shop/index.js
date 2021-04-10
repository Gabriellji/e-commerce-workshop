import React, { useContext} from 'react';
import { Redirect } from 'react-router';
import { paths } from '../../constants/paths';
import { AuthContext } from '../../context/AuthProvider';
import CardList from "../card-list";
import Header from "../header";
import Panel from "../pagination-panel";

const Shop = () => {
    const auth = useContext(AuthContext);
    return  auth.state.redirectProfile ? (
        <>
        <Header />
        <CardList />
        <Panel />
        </>
    ) : <Redirect to={paths.login}/>
}

export default Shop;