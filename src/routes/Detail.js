import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Detail (){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === undefined || location.state === null) {
            console.log("location.state 미존재! -> 홈으로 이동!");
            navigate('/'); 
        };
    },[location, navigate]);

    if (location.state) {
        return <span>{location.state.title}</span>;
    }else {
        return null;
    }
}
