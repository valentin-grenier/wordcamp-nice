<?php
// This file is generated. Do not modify it manually.
return array(
	'wordcamp-nice' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wcnice/repos',
		'version' => '0.1.0',
		'title' => 'WordCamp Nice',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Un bloc pour afficher les dépôts GitHub d\'un utilisateur, récupérés via l\'API publique de GitHub.',
		'example' => array(
			
		),
		'attributes' => array(
			'user' => array(
				'type' => 'string',
				'default' => ''
			),
			'sort' => array(
				'type' => 'string',
				'default' => 'updated'
			),
			'perPage' => array(
				'type' => 'number',
				'default' => 10
			),
			'token' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true
		),
		'textdomain' => 'wordcamp-nice',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	)
);
