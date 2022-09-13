import btnStyles from "@/styles/SubmitButton.module.scss"

export default function SubmitButton(props) {
    return (
        <button className={btnStyles.btn} type="submit">{props.children}</button>
    )
}