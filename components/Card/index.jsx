import Image from 'next/image'
import { motion } from 'motion/react'
import styles from './Card.module.scss'

export default function Card({
	imageSrc,
	imageAlt,
	link,
	title,
	description,
	index,
	basic,
	extLink,
}) {
	const classList = `${styles.card} ${basic && styles.card____basic}`
	const extLinkIcon = (
		<svg
			className="extLink"
			width="16"
			height="16"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M36 26V38C36 39.0609 35.5786 40.0783 34.8284 40.8284C34.0783 41.5786 33.0609 42 32 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V16C6 14.9391 6.42143 13.9217 7.17157 13.1716C7.92172 12.4214 8.93913 12 10 12H22M30 6H42M42 6V18M42 6L20 28"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="stroke-accent"
			/>
		</svg>
	)

	const cardImage = () => {
		return (
			<motion.div
				className={styles.card__image}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				transition={{
					duration: 0.01,
					delay: 0.5 + index * 0.1,
					type: 'spring',
					stiffness: 200,
					damping: 30,
				}}
			>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={540}
					height={360}
				/>
			</motion.div>
		)
	}

	return (
		<div className={classList}>
			{imageSrc && imageAlt && cardImage()}
			<div className={styles.card__content}>
				<h2 id={`card-title-${index}`} className={styles.card__header}>
					<a href={link}>{title}</a>
					{extLink && extLinkIcon}
				</h2>
				<p className={styles.card__description}>{description}</p>
			</div>
		</div>
	)
}
