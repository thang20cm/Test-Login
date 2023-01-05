import { createClient } from '@supabase/supabase-js';
import { Auth,ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';


const supabase = createClient(
    "https://ztwxkweumtywwsteivtp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0d3hrd2V1bXR5d3dzdGVpdnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5MDk1MDUsImV4cCI6MTk4ODQ4NTUwNX0.Vm0Ke-lt2Mee0GN54UYHCONnesF3EOp3wywTG_5VLNA"
);



function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async(event)=>{
        if(event!=="SINGNED_OUT"){
            navigate("/success");
        }else{
            navigate("/")
        }
    })
    return (
      <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                appearance={{theme:ThemeSupa}}
                theme="dark"
                providers={["github","facebook","google"]}

            />
        </header>
      </div>
    );
  }
  
  export default Login;
  