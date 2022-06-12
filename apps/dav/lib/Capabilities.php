<?php
/**
 * @copyright Copyright (c) 2016, ownCloud GmbH
 *
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @author Louis Chemineau <louis@chmn.me>
 * @author Côme Chilliet <come.chilliet@nextcloud.com>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OCA\DAV;

use OC\Files\ObjectStore\ObjectStoreStorage;
use OCP\Capabilities\ICapability;
use OCP\IConfig;
use OCP\Files\IRootFolder;
use OCP\Files\ObjectStore\IObjectStoreMultiPartUpload;

class Capabilities implements ICapability {

	private IRootFolder $rootFolder;
	private IConfig $config;

	public function __construct(IRootFolder $rootFolder, IConfig $config) {
		$this->rootFolder = $rootFolder;
		$this->config = $config;
	}

	public function getCapabilities() {
		/** @var ObjectStoreStorage $rootStorage */
		$rootStorage = $this->rootFolder->get('')->getStorage();

		return [
			'dav' => [
				'chunking' => '1.0',
				's3-multipart' => $rootStorage->instanceOfStorage(ObjectStoreStorage::class) && $rootStorage->getObjectStore() instanceof IObjectStoreMultiPartUpload,
			]
		];
		if ($this->config->getSystemValueBool('bulkupload.enabled', true)) {
			$capabilities['dav']['bulkupload'] = '1.0';
		}
		return $capabilities;
	}
}
