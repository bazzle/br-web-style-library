import styles from './Buttons.module.scss'

export default function Buttons({ buttons = [] }) {
	if (buttons.length === 0) return false
	const buttonsOutput = buttons.map((button, index) => {
		return (
			<div className={styles.buttons__item} key={index}>
				<a href={button.link} className={styles.buttons__button}>
					<span className={styles.buttons__linkText}>{button.linkText}</span>
					{
						(button.icon) && (
							<span className={styles.buttons__icon}>{button.icon}</span>
						)
					}
				</a>
				<span className={styles.divider}></span>
			</div>
		)
	})
	return <div className={styles.buttons}>{buttonsOutput}</div>
}
