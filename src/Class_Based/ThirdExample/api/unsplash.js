import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
                Authorization: 'Client-ID G_I33CKx5pLF6rRLeEofN1lvLqwSGrhvw-xXfW0X_PI'

            }

})