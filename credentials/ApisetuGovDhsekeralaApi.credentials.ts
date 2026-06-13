import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDhsekeralaApi implements ICredentialType {
        name = 'N8nDevApisetuGovDhsekeralaApi';

        displayName = 'Apisetu Gov Dhsekerala API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDhsekerala/apisetu-gov-dhsekerala.svg', dark: 'file:../nodes/ApisetuGovDhsekerala/apisetu-gov-dhsekerala.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/dhsekerala/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/dhsekerala/v3',
                        description: 'The base URL of your Apisetu Gov Dhsekerala API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
