import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from './../../asets/images/images.jpg'
import {UsersPropsType} from "./UsersContainer";



export class UsersC extends React.Component <UsersPropsType>{
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUser(response.data.items/*[{
                id: 1,
                photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                followed: true,
                fullName: 'Artem',
                status: 'I am React developer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                    followed: false,
                    fullName: 'Victor',
                    status: 'I am react mentor',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                    followed: true,
                    fullName: 'Dimych',
                    status: 'I am school owner',
                    location: {city: 'Moscow', country: 'Russia'}
                },]*/)
            })
    }
        render() {
        return <div>

            {
                this.props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div> {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}> unFollow </button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
                    }}> Follow </button>}

                </div>
            </span>

                    <span>
<span>
    <div> {u.name}</div>
    <div> {u.status}</div>
</span>
                        {/*<span>
                        <div> {'u.location.country'}</div>
                        <div> {'u.location.city'}</div>
                    </span>*/}

            </span>
                </div>)
            }
        </div>

    }
}