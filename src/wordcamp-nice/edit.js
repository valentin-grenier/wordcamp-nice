import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";
import "./style.scss";

export default function Edit(props) {
	// On récupère les propriétés du bloc et la fonction pour mettre à jour les attributs
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	// Nos variables d'état pour stocker les données des repos, l'état de chargement et les erreurs éventuelles
	// ...

	// On utilise useEffect pour déclencher une action à chaque fois qu'un des attributs du bloc change
	// ...

	return (
		<div {...blockProps}>
			{/* Les paramètres du bloc */}

			{/* Premier cas : aucun utilisateur n'est renseigné */}

			{/* Deuxième cas : les données sont en cours de chargement */}

			{/* Troisième cas : une erreur est survenue */}

			{/* Quatrième cas : les données ont été récupérées avec succès */}

			{/* Cinquième cas : aucun dépôt public trouvé pour l'utilisateur recherché */}

			{/* Rendu par défaut du bloc dans l'éditeur */}
			<div className="wp-block-wcnice-repos__error">
				<p>{__("Le rendu du bloc côté éditeur", "wordcamp-nice")}</p>
			</div>
		</div>
	);
}
