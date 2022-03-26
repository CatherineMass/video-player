import { useState } from 'react';

const style = {
  border: '3px solid red'
};

const [nameStyle, setNameStyle] = useState({});
const [emailStyle, setEmailStyle] = useState({});
const [passwordStyle, setPasswordStyle] = useState({});

const validation = (username: string, email: string, password: string) => {
  !username ? setNameStyle(style) : setNameStyle({});
  !email ? setEmailStyle(style) : setEmailStyle({}); 
  !password ? setPasswordStyle(style) : setPasswordStyle({});
};

export default {validation, nameStyle, emailStyle, passwordStyle};

