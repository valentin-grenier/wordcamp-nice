<?php

/**
 * Render callback pour le bloc GitHub Repos
 *
 * @param array    $attributes Les attributs du bloc
 * @param string   $content    Le contenu du bloc
 * @param WP_Block $block      L'instance du bloc
 *
 * @return string Le HTML du bloc
 */

// Récupération des attributs

// Si pas d'utilisateur, on affiche un message
// if (empty($user)) {
// 	return '<div class="wp-block-wcnice-repos__error"><p>' . esc_html__('Aucun nom d\'utilisateur GitHub spécifié.', 'wordcamp-nice') . '</p></div>';
// }

// Préparation de la requête API GitHub
// $api_url = "https://api.github.com/users/{$user}/repos?sort={$sort}&per_page={$per_page}";

// Configuration des arguments de la requête
// $args = array(
// 	'timeout' => 15,
// 	'headers' => array(
// 		'User-Agent' => 'WordPress/' . get_bloginfo('version') . '; ' . get_bloginfo('url')
// 	)
// );

// Ajout du token si présent
// if (!empty($token)) {
// 	$args['headers']['Authorization'] = 'token ' . $token;
// }

// Requête vers l'API GitHub
// $response = wp_remote_get($api_url, $args);

// Gestion des erreurs
// if (is_wp_error($response)) {
// 	return '<div class="wp-block-wcnice-repos__error"><p>' . esc_html__('Erreur lors de la récupération des dépôts.', 'wordcamp-nice') . '</p></div>';
// }

// $status_code = wp_remote_retrieve_response_code($response);


// Décodage de la réponse
// $repos = json_decode(wp_remote_retrieve_body($response), true);

// Construction du HTML
$wrapper_attributes = get_block_wrapper_attributes();

?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="wp-block-wcnice-repo">
		<h3 class="wp-block-wcnice-repo__name">
			<a href="" target="_blank" rel="noopener noreferrer"></a>
		</h3>

		<p class="wp-block-wcnice-repo__description"></p>

		<div class="wp-block-wcnice-repo__bottom">
			<span class="wp-block-wcnice-repo__language"></span>
			<time class="wp-block-wcnice-repo__update-date" datetime=""></time>
		</div>
	</div>

	<div class="wp-block-wcnice-repos__error">
		<p><?php echo esc_html__('Utilisateur GitHub non trouvé.', 'wordcamp-nice'); ?></p>
	</div>

	<div class="wp-block-wcnice-repos__error">
		<p><?php echo esc_html__('Limite de requêtes atteinte. Essayez à nouveau plus tard ou utilisez un token GitHub.', 'wordcamp-nice'); ?></p>
	</div>

	<div class="wp-block-wcnice-repos__error">
		<p><?php echo esc_html__('Erreur inconnue lors de la récupération des dépôts.', 'wordcamp-nice'); ?></p>
	</div>
</div>
