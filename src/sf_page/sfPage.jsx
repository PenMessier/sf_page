import React from 'react';
import styles from './sfPage.module.scss';
import SfLogo from './sfLogo.svg';

const SfPage = () => (
	<div className={styles.container}>
		<div className={styles.header}>
			<img src={SfLogo} alt="" />
		</div>
		<div className={styles.centerContainer}>
			<div className={styles.upperContainer}>
				<div className={styles.centerText}>
					Нажмите на кнопку 
					<a href="/" className={styles.link_black}> «Перейти в приложение»</a>
					, чтобы открыть файлы в приложении
					<a href="/" className={styles.link_black}> Сберфайлы</a>
				</div>
				<button
					type="button"
					className={styles.buttonBlue}
				>
					Перейти в приложение
				</button>
			</div>
			<div className={styles.textUnderLine}>
				Приложение Сберфайлы не установлено? <a href="/" className={styles.link_blue}>Установить</a>
			</div>
			<div className={styles.textUnderLine}>
				Проблемы с приложением Сберфайлы? Проверьте, установлено ли приложение
			</div>
		</div>
		<div className={styles.footer}>© 1997—2020 ПАО Сбербанк.</div>
	</div>
);

export default SfPage;
