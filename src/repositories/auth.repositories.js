const createUser = async(username,email,password,admin)=>{
    const user = {username,email,password}
    const result = {...user,id:"12345",admin}; //Llamada a mongo
    return result;
};

const getUserByUsername = async(email)=>{
    const result = null | {username:"mcp_admin",email:"mpc_admin@mpc.biz",password:"12345", admin:true};
    return result;
};

export {createUser,getUserByUsername};