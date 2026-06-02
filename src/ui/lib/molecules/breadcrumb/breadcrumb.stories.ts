import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MmcBreadcrumb } from './breadcrumb.component';
import { MmcBreadcrumbService } from './breadcrumb.service';
import { LogService } from '@fromforgesoftware/angular-kit/log';
import { provideIcons } from '@ng-icons/core';
import {
	lucideBox,
	lucideCpu,
	lucidePalette,
	lucideMegaphone,
	lucideAppWindow,
	lucideServer,
	lucideSmartphone,
} from '@ng-icons/lucide';

class MockLogService {
	debug() {}
	info() {}
	warn() {}
	error() {}
	fatal() {}
	log() {}
}

const meta: Meta<MmcBreadcrumb> = {
	title: 'Molecules/Breadcrumb',
	component: MmcBreadcrumb,

	decorators: [
		moduleMetadata({
			imports: [MmcBreadcrumb],
			providers: [
				MmcBreadcrumbService,
				{ provide: LogService, useClass: MockLogService },
				provideIcons({
					lucideBox,
					lucideCpu,
					lucidePalette,
					lucideMegaphone,
					lucideAppWindow,
					lucideServer,
					lucideSmartphone,
				}),
			],
		}),
	],
};

export default meta;
type Story = StoryObj<MmcBreadcrumb>;

export const Default: Story = {
	decorators: [
		moduleMetadata({
			providers: [
				{
					provide: MmcBreadcrumbService,
					useValue: {
						breadcrumb: () => [
							{ label: 'Home', url: '/' },
							{ label: 'Products', url: '/products' },
							{ label: 'Electronics', url: '/products/electronics' },
						],
					},
				},
			],
		}),
	],
};

export const Short: Story = {
	decorators: [
		moduleMetadata({
			providers: [
				{
					provide: MmcBreadcrumbService,
					useValue: {
						breadcrumb: () => [
							{ label: 'Home', url: '/' },
							{ label: 'Dashboard', url: '/dashboard' },
						],
					},
				},
			],
		}),
	],
};

export const Long: Story = {
	decorators: [
		moduleMetadata({
			providers: [
				{
					provide: MmcBreadcrumbService,
					useValue: {
						breadcrumb: () => [
							{ label: 'Home', url: '/' },
							{ label: 'Products', url: '/products' },
							{ label: 'Electronics', url: '/products/electronics' },
							{ label: 'Computers', url: '/products/electronics/computers' },
							{
								label: 'Laptops',
								url: '/products/electronics/computers/laptops',
							},
							{
								label: 'Gaming Laptops',
								url: '/products/electronics/computers/laptops/gaming',
							},
						],
					},
				},
			],
		}),
	],
};

export const Single: Story = {
	decorators: [
		moduleMetadata({
			providers: [
				{
					provide: MmcBreadcrumbService,
					useValue: {
						breadcrumb: () => [{ label: 'Current Page', url: '/current' }],
					},
				},
			],
		}),
	],
};

export const Selector: Story = {
	args: {
		variant: 'selector',
		logo: {
			icon: 'lucideBox',
			alt: 'Logo',
		},
		segments: [
			{
				id: 'team',
				label: 'Team',
				selectedId: 'engineering',
				items: [
					{ id: 'engineering', label: 'Engineering', icon: 'lucideCpu' },
					{ id: 'design', label: 'Design', icon: 'lucidePalette' },
					{ id: 'marketing', label: 'Marketing', icon: 'lucideMegaphone' },
				],
				showAddButton: true,
				addButtonLabel: 'Create Team',
			},
			{
				id: 'project',
				label: 'Project',
				selectedId: 'frontend',
				items: [
					{ id: 'frontend', label: 'Frontend', icon: 'lucideAppWindow' },
					{ id: 'backend', label: 'Backend', icon: 'lucideServer' },
					{ id: 'mobile', label: 'Mobile App', icon: 'lucideSmartphone' },
				],
				showAddButton: true,
				addButtonLabel: 'New Project',
			},
		],
	},
	decorators: [
		moduleMetadata({
			providers: [MmcBreadcrumbService], // Provide real service or mock if needed, but selector variant relies on inputs
		}),
	],
};
