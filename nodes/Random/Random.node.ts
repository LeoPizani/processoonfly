import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
    IDataObject,
} from 'n8n-workflow';

export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random',
		name: 'random',
		icon: 'fa:random',
		group: ['transform'],
		version: 1,
		description: 'Generates a true random number using the Random.org API',
		defaults: {
			name: 'Random',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'hidden',
				default: 'generate',
				noDataExpression: true,
			},
			{
				displayName: 'Min',
				name: 'min',
				type: 'number',
				required: true,
				default: 1,
				description: 'Minimum inclusive value for the random number',
			},
			{
				displayName: 'Max',
				name: 'max',
				type: 'number',
				required: true,
				default: 100,
				description: 'Maximum inclusive value for the random number',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		const returnData: IDataObject[] = [];

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i) as number;
			const max = this.getNodeParameter('max', i) as number;

			const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

			const response = await this.helpers.httpRequest({
				method: 'GET',
				url,
				json: false,
			});

			const randomNumber = parseInt(response as string, 10);


			const result = {
				randomNumber,
			};

			returnData.push(result);
		}


		return [this.helpers.returnJsonArray(returnData)];
	}
}
