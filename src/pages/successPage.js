import { createClient } from '@supabase/supabase-js';
import { Auth,ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import React,{ useEffect,useState } from 'react';

const supabase = createClient(
    "https://ztwxkweumtywwsteivtp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0d3hrd2V1bXR5d3dzdGVpdnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5MDk1MDUsImV4cCI6MTk4ODQ4NTUwNX0.Vm0Ke-lt2Mee0GN54UYHCONnesF3EOp3wywTG_5VLNA"
);




function Success() {
    const[user,setUser]= useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function getUserData(){
            await supabase.auth.getUser().then((value)=>
            {
                //value.data.user
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    },[]);

    async function signOutUser(){
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
      <div className="App">
        <header className="App-header">
        {Object.keys(user).length !==0 ?
        <>
            <h1>Thanh Cong!</h1>
            <button onClick={()=>signOutUser()}>Dang Xuat</button>
        </>
        :
            <>
                <h1>người dùng chưa đăng nhập</h1>
                <button onClick={()=>{navigate("/")}}>Ve Trang Chu</button>
            </>
        }
            
        </header>
      </div>
    );
  }
  
  export default Success;
  