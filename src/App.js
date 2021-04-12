import "./App.css";
import ProfileComp from "./Profile/ProfileCom";

function App() {
    const handlename = (name) => {
        alert(`My name is ${name}`);
    };
    // const handleName = (fullName) => {
    // alert(`My name is ${fullName}`);
    // };
    return (
        <div className="App">
            <ProfileComp
                name=" tawfik"
                bio=" my Bio"
                profession="Student"
                handlename={handlename}
            >
                <img
                    style={{
                        height: "500px",
                        width: "500px",
                        borderRadius: "20px",
                    }}
                    src="./mypic.jpg"
                    alt="taraji photo"
                />
            </ProfileComp>
        </div>
    );
}

export default App;
