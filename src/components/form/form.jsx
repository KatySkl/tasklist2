import React from "react";
import styles from "./form.module.css";

const Form = () => {
    return (
     <form className={styles.form}>
        <input type="text" />
        <select name="userName" id="userName">
            <option value="disabled selected"> select user</option>
        </select>
        <button className={styles.button}>Add todo</button>
     </form>
    )
}

export default Form;