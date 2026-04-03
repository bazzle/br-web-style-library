import styles from './CallToAction.module.scss'

export default function CallToAction({ buttons = [] }) {
	if (buttons.length === 0) return false
	const buttonsOutput = buttons.map((button, index) => {
		return (
			<div className={styles.callToAction__item} key={index}>
				<a href={button.link} className={styles.callToAction__button}>
					{button.linkText}
				</a>
				<span className={styles.divider}></span>
			</div>
		)
	})
	return <div className={styles.callToAction}>{buttonsOutput}</div>
}
