import { useContext } from 'react';
import CrudContext from '../context/CrudContext';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
  const {db, loading, error} = useContext(CrudContext);
   
    return (
        <div>
            <h2>CRUD APP Con Context</h2>
            <CrudForm/>
            {loading && <Loader/>}
            {
                error && <Message 
                        msg={`Error ${error.status}: ${error.statusText}`} 
                        bgColor="#dc3545"
                        />
            }
            {db && <CrudTable/>} 
        </div>
    )
}

export default CrudApi
