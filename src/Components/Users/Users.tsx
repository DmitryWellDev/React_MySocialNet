import React from 'react'
import {UserType} from "../../redux/Users-Reducer";
import styles from './Users.module.css'
import   axios from 'axios'
import userImage from '../../assets/images/photo.jpg'


type UsersPropsType = {
    users: Array<UserType>
    Follow: (userId: number) => void
    Unfollow: (userId: number) => void
    SetUsers: (users: Array<UserType>) => void
}



const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    props.SetUsers(response.data.items)
                })
        }
    }



    //props.SetUsers([
        // {
        //     followed: true,
        //     personPhoto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAsQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBAgUEAwj/xAA3EAABBAIBAgQEBAQFBQAAAAABAAIDBAURBhIhBzFBURMiYXEUMoGhI5GSsUJSYnKCM3OisuH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAgEFAQAAAAAAAAAAAQIREiEDEzEjMkFRcRT/2gAMAwEAAhEDEQA/AKrREX1GRERAREQEREBERxDRskAfVARZhbJP/wBCN8v/AG2F39l1qHF+QZCMyVMLekYDrqdF8MH6Av1s/ZTlIOQi3sQy1LMlW1FJDYiOpIpWlr2n6grRXewREQEREBERAREQEREBERAREQEREBERBgqVSui4fBDAKlefkErBLPJZjEjaAd3bG1h234mu5J3rYC+VGSLjeFpZeOGObMX3SGnJK3qZTjY7p+IG+RkLt6J2Br+celkfNNJNM90ksji973HZc4nZJ+pKx938HcfzblL/AM2duAezS1o/YBcm7kb+QkEmQvWrTx5GeZz9fbZ7fovMi1xn6Egrcqnkhip56rBlqDGfD6ZmNE7G+nRMB1Aj02SPRYdg8Ra6nYrlFFrCdiHKMfWkaPYkAtcfq0/ouAvTjrhx9yOyyvWnLPKKzEJIz92rNx13BK+XYHF4/h2OvUYX/HZPHVltjrEdx7mPc9zQ/XygtGnAAHZ15bULHkrWq5OxzLhd3FOxMDbZYHV3dLSwSf4SGhrSwu6XNa75hsdJO1U7D8vcaPsfRY8Vvco2REXYEREBERAREQEREBERAREQERD5IJHmoZZOM8VZXjfOxtOzMXsHUQTMS9vbuAzTf6iVGw4EbaQR9CrG4xUE3JPDys5x6Y6Rs9jruZJX/wBwP5K383wrjedJfksRXklPnLGDG/8Aqborz+6YalV+W0Kvu54Mccl3+Gs5Gt/tlD//AGBWlDwWwEDibty/cG/yl7Yx/wCI3+6v+jA0of02vfYw+Qq46LIWqxgqz/8AQdKQ0ze5Y3zIG/PWvqrp5D4S4v8ABun4yJKV+Ju4uqV0jXn2PUSuX4lYOCPwxxtuvB8AVZY5mw+kTZuzmj6dTgdeie+WzQifhryCXEHJvdELDKFCe3HE52idGPbQfQbDXfTRPqoO+UzzSzuaGmWRzy1vkNneh/NTTBYKelag1/FbneO2DVHl8SZ8R3F99j9woSGPYOiRj2PHm17SCD+quOvZbEbIiLsCIiAiIgIiICIiAiIgIiIC3ghlszx168T5ZpXBkcbBtznHyAWi7vA5Gw83wb5DpousBP32B+5CmV1LRPOIYyU814nW/FU5LGLxkrbgr2Gy/DLHvb0EtPZ38Rnb7q0Hcx40y4+m/PYxliN3Q+N9pjSHb1rufPfoqmGMzZz3EKtDJPom7ivwrp4mt3E2PXxmD1PdoOz6n7qa2fCnEWqcVazduvEbdNcBG0/s1eLLjdbqp3DPFOwSQSMkYfJzHAj+YX08lTOa4Lf8P6cnIeMZqYspfxZas4PQ9vkdhpAdrZOikGa8QOV34eO5KOvh4b8D3umZWc15iGuotJee/wAwHp5rPrl7l6Fl5blvHsRIYsnmaMEo84nTAvH/ABHdR3lWSwnN+F5ijgsrXsTRQif4cTvm/hkPA6T30S3W/qvPjPB/AUnCV9nISzjv8QTdB36nsF4Of8RkwXHrGYw+cykc1Ru3NnsmUOYezgC7uOxKsmG5qqh2Vyl2hx3ATHH08rhIcfVD2umPVUtacQ7bD1RuIIHfsdBRvlPLcjyl9X8fHDFFUDxCxjnvcOrW+p7yS78oUyzcTqPh38C2yJkzcLU+SNgGhJMPh9Xu4dEhJ9yVWLPyhd/FJbajKIi9CCIiAiIgIiICIiAiIgIiICzHYlqTR2oO00EjZY/9zTsfuFhD5JexeEjhNmMS/G7ks0L1mzBANAzQzME+hv3a57QfLqb9CpzX5bgZm/Pk69Z4/NFbd8GRp9i1+iqQ4fyO1juPtvzPdOMHkqxY0gFzK0gkY9gPnrZ7Det6V9Y+1jc3QgyFT4NmvO3rY8s3/PfkR7ei+fnNfLSPZy/Dyt0ODxDvxNWWZj79qPvFHC13UWB3k5zi3p0PIEk+m+lyupbBo5fGQme3jZS81263PC4akYN/4taI+rQPVeLnXI2cUqVrjZarWF3R+FcD1y7Le7APYb2fTe++tHkZbxOxEs1Gjhrtd0txwY+aUO6IC7QAcR5HZ/b9VJjldWQSWHmOBkjDn3hXeR3issdE9p9i1w2o5zrKQ8k49fo46Kw+nFC6a1afC6OMhg6mMaXAdRLw3eu2tqfBjC0F4Djr8xHmoL4i8nqRz0+JwtbPdyliGGZnm2KF72gl31I3oe3dTH56EC8WLzDixBE4amvRwMLXAh8VaHR19BLK8fdqrRo0F1OV5ObK8huOe5or1ppIKkLGBjIYWvPS1rR2C5gXs8M1iyIiLsCIiAiIgIiICIiAiIgIiICFEQd7h2rc2SwbnNactUMUHUdA2GOD4gfuQR9yFIfDvmD8Dhs/ibcjogKk1irs6MczW6cwexPY/cH3Ue4FG2Xm+EDhsMs/F/oa5w/doUo5nwh0vE8PyjGREumoQvvwsB83MB+IPr30f0PuuGeuXG/lXUg8H7liGCzlsvcsyuhBdGxrS9nYfL1SPPkd/wDxfZ/g7TkcPgz5hg6vm+KK+tfoVrx3xeoxcfbS5BRsy2oYhG18AaWzgDtvZHSew3/Nc7w+8Sq2LdcHKJb9hz3B1ebqdN8Nuu7NE/v6+qx9abOncxuMn8N8/FbyfIbFjFTU5nPhlJ21zCwNGtkOPzaBACgXHcjPb5Jk+XZLRNGOS7Jt3YyuBZDGP+RAH0avRy3N3vEnlVWvi6ZbHHuKrG7zAPdz3keXl+n3KlXMeL0+NcTs4mt88j8RJPNKezpZIp4XdR/V/Ye3ZN8Z380U7D1EbeduPdxPqfUr6LVvktl6MZqIIiLQIiICIiAiIgIiICIiAiIgIiIPrUt2KFyC5SldDYgeHxyN82kf39iPUEq4eAc1ht1nVGV+rYP4nEt7uZv8z6wJ+aP1MXm3v077A0ysDqY9ssb3MkYepj2OIc0+hBHkVy8nj5qsjlPAIp5zkuN2oH0Z3Et/yB29EbA+Ug720jz9vJcGHgeYkkDXSVG77bEhd+wHdevA+IdirOHZgTGZ3Z2Rp9IlcPQSxEdE3ts6cB5Hak2S8TcfHUaa+QZNJ0aMWMx7qskh/wBUkmxGPQhgcfZy48/Jj0O1xfFY/gtOVsbWXc8+ISShzhGIGHydK89omefn39gSq65zzSTLyT06Nn8Q2bTbl8MLPjgdxHE092Qg99ebj3K4ec5Jfzcf4UtZUxod1tpwklrnf5pHH5pHf6nErlMaAOy1h47byyGQNLKIvSgiIgIiICIiAiIgIiICIiAiIgIiICIiDBWOkeyIg2HkiIgIiICIiAiIgIiICIiD/9k=',
        //     id: 1,
        //     fullName: 'Dmitry',
        //     status: 'Hi man!',
        //     location: {country: 'Ukraine', city: 'Kharkov'}
        // },
        // {
        //     followed: false,
        //     personPhoto: 'data:image/jpeg;base64,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',
        //     id: 2,
        //     fullName: 'Dimas',
        //     status: 'How are you?',
        //     location: {country: 'Russia', city: 'Orel'}
        // },
        // {
        //     followed: true,
        //     personPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT88Xel22e95INYZ8zhxrKj8ojy_HuGh1Kluw&usqp=CAU',
        //     id: 3,
        //     fullName: 'Dimon',
        //     status: 'Dont you sleep? ',
        //     location: {country: 'Poland', city: 'Krakov'}
        // },
    //])

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map((u) => <div key={u.id}>
                    <div className={styles.main_wrap}>
                        <div>
                            <img className={styles.item_image} src={u.photos.small != null ?  u.photos.small : userImage}/>

                            {u.followed
                                ? <button onClick={() => {props.Unfollow(u.id)}}>unfollow</button>
                                : <button onClick={() => {props.Follow(u.id)}}>follow</button>}
                        </div>
                        <div className={styles.dataList}>
                            <div className={`${styles.dataItem} ${styles.dataItem_name}`}>{u.name}</div>
                            <div className={styles.dataItem}>{"u.location.country"}</div>
                            <div className={styles.dataItem}>{u.status}</div>
                            <div className={styles.dataItem}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users