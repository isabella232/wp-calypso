/**
 * External dependencies
 */
import page from 'page';

/**
 * Internal dependencies
 */
import config from 'config';

import { navigation, siteSelection, sites } from 'my-sites/controller';
import { makeLayout, render as clientRender } from 'controller';
import wrapInSiteOffsetProvider from 'landing/jetpack-cloud/lib/wrap-in-site-offset';
import {
	showUpsellIfNoScan,
	showUpsellIfNoScanHistory,
	scan,
	scanHistory,
} from 'landing/jetpack-cloud/sections/scan/controller';

export default function () {
	if ( config.isEnabled( 'jetpack-cloud/scan' ) ) {
		page( '/scan', siteSelection, sites, navigation, makeLayout, clientRender );
		page(
			'/scan/:site',
			siteSelection,
			navigation,
			scan,
			wrapInSiteOffsetProvider,
			showUpsellIfNoScan,
			makeLayout,
			clientRender
		);

		if ( config.isEnabled( 'jetpack-cloud/scan-history' ) ) {
			page(
				'/scan/history/:site/:filter?',
				siteSelection,
				navigation,
				scanHistory,
				wrapInSiteOffsetProvider,
				showUpsellIfNoScanHistory,
				makeLayout,
				clientRender
			);
		}
	}
}
