import { Resource, ResourceConfig, ResourceProps } from '@fromforgesoftware/ts-kit/jsonapi';

const ResourceTypeTest = 'test';

export type TestResourceProps = Partial<ResourceProps>;

@ResourceConfig({
	type: ResourceTypeTest,
})
export class TestResource extends Resource {
	constructor(props: Partial<TestResourceProps>) {
		super(props);
	}
}
