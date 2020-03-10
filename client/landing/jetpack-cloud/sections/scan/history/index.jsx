/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';
import ThreatItem from '../../../components/threat-item';

const threats = [
	{
		id: 1,
		title: 'Infected core file: index.php',
		action: null,
		detectionDate: '23 September, 2019',
		actionDate: null,
		description: {
			title: 'Unexpected string was found in: /htdocs/wp-admin/index.php',
			problem:
				'Jetpack has detected code that is often used in web-based "shell" programs. If you believe the file(s) have been infected they need to be cleaned.',
			fix:
				'To fix this threat, Jetpack will be deleting the file, since it’s not a part of the original WordPress.',
			details: 'This threat was found in the file: /htdocs/index.php',
		},
	},
	{
		id: 2,
		title: 'Infected Plugin: Contact Form 7',
		action: null,
		detectionDate: '17 September, 2019',
		actionDate: null,
		description: {
			title:
				'Unexpected file baaaaaad--file.php contains malicious code and is not part of the Plugin',
			problem:
				'Jetpack has detected code that is often used in web-based "shell" programs. If you believe the file(s) have been infected they need to be cleaned.',
			fix:
				'To fix this threat, Jetpack will be deleting the file, since it’s not a part of the original WordPress.',
			details: 'This threat was found in the file: /htdocs/sx--a4bp.php',
		},
	},
];

class ScanHistoryPage extends Component {
	render() {
		const { threatsFound } = this.props;
		return (
			<div>
				{ threatsFound.map( threat => (
					<ThreatItem key={ threat.id } threat={ threat } />
				) ) }
			</div>
		);
	}
}

export default connect( state => {
	const siteId = getSelectedSiteId( state );

	const threatsFound = threats;

	return {
		siteId,
		threatsFound,
	};
} )( ScanHistoryPage );
