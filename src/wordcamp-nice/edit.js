import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";

import "./editor.scss";
import "./style.scss";

export default function Edit(props) {
	// On récupère les propriétés du bloc et la fonction pour mettre à jour les attributs
	const { attributes, setAttributes } = props; // Les attributs du bloc et la fonction pour les mettre à jour
	const blockProps = useBlockProps(); // Les propriétés du bloc pour le wrapper de notre composant

	// Nos variables d'état pour stocker les données des repos, l'état de chargement et les erreurs éventuelles
	// (repos, loading, error)
	// ...

	// On utilise useEffect pour déclencher une action à chaque fois qu'un des attributs du bloc change
	// L'action en question : récupérer les repos depuis l'API GitHub
	useEffect(() => {
		try {
			// On utilise l'API GitHub pour récupérer les repos d'un utilisateur
		} catch (error) {
			// En cas d'erreur (ex: problème de réseau), on affiche un message d'erreur
		} finally {
			// Sinon, on parse les données et on les stocke dans une constante
			// ...
			// On met à jour la liste des repos dans l'interface avec les données récupérées
			// ...
		}
	}, [attributes]); // Le tableau de dépendances contient les attributs du bloc, donc l'effet se déclenchera à chaque fois qu'ils changent

	// Notre fonction pour récupérer les repos depuis l'API GitHub
	// Endpoint : https://api.github.com/users/[user]/repos
	// Paramètres : sort=updated, per_page=5, ... (voir la documentation de l'API GitHub pour plus de détails)

	return (
		<div {...blockProps}>
			{/* Les paramètres du bloc (username, sort, per_page, token) */}

			{/* Premier cas : aucun utilisateur n'est renseigné */}

			{/* Deuxième cas : les données sont en cours de chargement */}

			{/* Troisième cas : une erreur est survenue */}

			{/* Quatrième cas : les données ont été récupérées avec succès */}

			{/* Cinquième cas : aucun dépôt public trouvé pour l'utilisateur recherché */}

			{/* Rendu par défaut du bloc dans l'éditeur */}
			<div className="wp-block-wcnice-repos__error">
				<p>{__("Exemple d'une erreur rencontrée", "wordcamp-nice")}</p>
			</div>

			<div className="wp-block-wcnice-repos__list">
				<div key="" className="wp-block-wcnice-repo">
					<h3 className="wp-block-wcnice-repo__name">
						<a href="#" target="_blank" rel="noopener noreferrer">
							Nom du dépôt
						</a>
					</h3>

					<p className="wp-block-wcnice-repo__description">
						Description du dépôt
					</p>

					<div className="wp-block-wcnice-repo__bottom">
						<time
							className="wp-block-wcnice-repo__update-date"
							dateTime="YYYY-MM-DDTHH:mm:ssZ"
						>
							05/03/2026
						</time>

						<span className="wp-block-wcnice-repo__language">PHP</span>
					</div>
				</div>
			</div>
		</div>
	);
}
