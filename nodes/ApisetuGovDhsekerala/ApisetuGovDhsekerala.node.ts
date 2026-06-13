import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovDhsekerala implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apisetu Gov Dhsekerala',
                name: 'N8nDevApisetuGovDhsekerala',
                icon: { light: 'file:./apisetu-gov-dhsekerala.svg', dark: 'file:./apisetu-gov-dhsekerala.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Kerala HSE March 2020 certificate and marklist now available for student download.',
                defaults: { name: 'Apisetu Gov Dhsekerala' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisetuGovDhsekeralaApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
