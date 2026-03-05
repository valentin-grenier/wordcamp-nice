import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	__experimentalNumberControl as NumberControl,
	Spinner,
	SelectControl,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

import "./editor.scss";
import "./style.scss";

export default function Edit(props) {
	// On récupère les propriétés du bloc et la fonction pour mettre à jour les attributs
	const blockProps = useBlockProps();
	const { setAttributes } = props;
	const { user, sort, perPage, token } = props.attributes;

	// Nos variables d'état pour stocker les données des repos, l'état de chargement et les erreurs éventuelles
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// On utilise useEffect pour déclencher une action à chaque fois qu'un des attributs du bloc change
	useEffect(() => {
		if (!user) {
			setRepos([]);
			setError(null);
			setLoading(false);
			return;
		}

		const fetchRepos = async () => {
			setLoading(true);
			setError(null);

			try {
				// On utilise l'API GitHub pour récupérer les repos d'un utilisateur
				const url = `https://api.github.com/users/${user}/repos?sort=${sort}&per_page=${perPage}`;
				console.log("Fetching:", url);
				const response = await fetch(url);
				console.log("Response status:", response.status);

				// Si on n'obtient pas de résultat (ex: utilisateur non trouvé), on affiche une erreur
				if (!response.ok) {
					throw new Error(__("Aucun utilisateur trouvé.", "wordcamp-nice"));
				}

				// Sinon, on parse les données et on les stocke dans une constante
				const data = await response.json();
				console.log("Data received:", data.length, "repos");

				// On met à jour la liste des repos dans l'interface avec les données récupérées
				setRepos(data);
			} catch (error) {
				// En cas d'erreur (ex: problème de réseau), on affiche un message d'erreur
				console.error("Fetch error:", error);
				setError(error.message);

				// Et on vide la liste des repos pour éviter tout affichage erroné
				setRepos([]);
			} finally {
				// Quel que soit le résultat de la requête, on arrête le chargement pour mettre à jour l'éditeur
				setLoading(false);
			}
		};

		fetchRepos();
	}, [user, sort, perPage, token]);

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Settings", "wordcamp-nice")}>
					<TextControl
						label={__("Nom d'utilisateur GitHub", "wordcamp-nice")}
						value={user}
						onChange={(value) => setAttributes({ user: value })}
					/>
					<SelectControl
						label={__("Trier par", "wordcamp-nice")}
						value={sort}
						options={[
							{
								label: __("Date de mise à jour", "wordcamp-nice"),
								value: "updated",
							},
							{
								label: __("Nom", "wordcamp-nice"),
								value: "full_name",
							},
							{
								label: __("Date de dernier push", "wordcamp-nice"),
								value: "pushed",
							},
						]}
						onChange={(value) => setAttributes({ sort: value })}
					/>
					<NumberControl
						label={__("Nombre de repos à afficher", "wordcamp-nice")}
						value={perPage}
						onChange={(value) => setAttributes({ perPage: value })}
						min={1}
						max={100}
						step={10}
					/>
					<TextControl
						label={__("Token GitHub (optionnel)", "wordcamp-nice")}
						type="password"
						value={token}
						onChange={(value) => setAttributes({ token: value })}
						help={
							<>
								{__("Pour augmenter la limite de 60 à 5000 requêtes/heure. ", "wordcamp-nice")}
								<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">
									{__("Générez un token en cliquant ici.", "wordcamp-nice")}
								</a>
							</>
						}
					/>
				</PanelBody>
			</InspectorControls>

			{/* Premier cas : aucun utilisateur n'est renseigné */}
			{!user && (
				<div className="wp-block-wcnice-repos__error">
					<p>
						{__(
							"Entrez un nom d'utilisateur GitHub dans les paramètres pour voir les dépôts.",
							"wordcamp-nice",
						)}
					</p>
				</div>
			)}

			{/* Deuxième cas : les données sont en cours de chargement */}
			{loading && <Spinner />}

			{/* Troisième cas : une erreur est survenue */}
			{error && (
				<div className="wp-block-wcnice-repos__error">
					<p>{error}</p>
				</div>
			)}

			{/* Quatrième cas : les données ont été récupérées avec succès */}
			{!loading && !error && repos.length > 0 && (
				<div className="wp-block-wcnice-repos">
					{repos.map((repo) => (
						<div key={repo.id} className="wp-block-wcnice-repo">
							<h3 className="wp-block-wcnice-repo__name">
								<a
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{repo.name}
								</a>
							</h3>

							<p className="wp-block-wcnice-repo__description">
								{repo.description
									? repo.description.length > 100
										? repo.description.substring(0, 100) + "..."
										: repo.description
									: ""}
							</p>

							<div className="wp-block-wcnice-repo__bottom">
								{repo.language && (
									<span className="wp-block-wcnice-repo__language">
										{repo.language}
									</span>
								)}

								<time
									className="wp-block-wcnice-repo__update-date"
									dateTime={repo.updated_at}
								>
									{__("Mis à jour le", "wordcamp-nice")}{" "}
									{new Date(repo.updated_at).toLocaleDateString("fr-FR")}
								</time>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Cinquième cas : aucun dépôt public trouvé pour l'utilisateur recherché */}
			{!loading && !error && user && repos.length === 0 && (
				<div className="wp-block-wcnice-repos__error">
					<p>
						{__("Aucun dépôt trouvé pour cet utilisateur.", "wordcamp-nice")}
					</p>
				</div>
			)}
		</div>
	);
}
