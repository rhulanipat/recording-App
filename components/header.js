import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native';
import { db } from './firebase';
import { collection, getDoc, setUpdate, doc } from 'firebase/firestore'
function Nav_Bar() {

    const [name, setName] = useState('')
    const [surname, setsurame] = useState('')
    const [show, setShow] = useState(false)

    const [UserInfo, setUserInfo] = useState({})
     function openPopup() {
        console.log(localStorage.getItem('userEmail'))
        /*const userRef = doc(db, 'user', 'makwela@gmail.com')
        console.log(userRef)
        const docSnap = await getDoc(userRef);
        console.log(docSnap)*/
        collection(db,'user').where('email', '==', 'makwela@gmail.com').get().then(snapshot => {
            return snapshot.docs.map((doc) => {doc.data()
            console.log(doc.data())
            });
        })

    }

    function update() {



    }
    return (
        <View>
            <View style={styles.profile}>
                <View style={styles.right}>
                    <Text onPress={() => openPopup(setShow(true))} style={styles.right_text}>Profile</Text>
                    <Text style={styles.right_text}>Logout</Text>
                </View>


            </View>
            <Modal transparent={true} visible={show}>
                <View style={styles.modal}>
                    <View style={styles.inner_modal}>
                        <View style={styles.modal_header}>
                            <Pressable onPress={() => setShow(false)} >
                                <Text>X</Text>
                            </Pressable>
                        </View>
                        <View style={styles.modal_body}>
                            <Text style={styles.update_Label}>Update Profile</Text>
                            <View style={styles.modal_forms}>
                                <TextInput placeholder='James' onChangeText={(event => setName(event))} />
                                <TextInput placeholder='James' onChangeText={(event => setsurame(event))} />
                                <Pressable onPress={update} >
                                    <Text>Update</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'row',
        position: 'relative',
    },
    right: {
        flexDirection: 'row',
        position: 'absolute',
        right: '2%'
    },
    right_text: {
        marginLeft: 2,
        marginRight: 2,
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1
    },
    inner_modal: {
        backgroundColor: 'white',
        flex: 1,
        margin: 50,
    },
    modal_header: {
        textAlign: 'right',
        marginRight: 2
    },
    modal_forms: {
        marginTop: 50
    },
    update_Label: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Nav_Bar;