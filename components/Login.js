import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import Header from './header';
function Home(){
    const navigation = useNavigation();
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function login(){
 
        await signInWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            localStorage.setItem('userEmail', response.user.email)
            localStorage.setItem('userId', response.user.uid)
            alert(response.user.uid)
             //navigation.navigate('recording')
        }, (error)=>{
            console.log(error)
            alert('Incorrect username or password')
        })
        //
    }


    return(
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.content}>
                 <TextInput placeholder='Username' onChangeText={(event) =>setEmail(event)}  style={styles.input}/>
            <TextInput placeholder='password' onChangeText={(event) =>setPassword(event)}  style={styles.input}/>
            <Pressable onPress={login}><Text>Login</Text></Pressable>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({
    container:{

    },
    content:{
        width:'50%',
        margin:'auto'
    },
    input:{
        width: 100,
        height:35
    }
})

export default Home;