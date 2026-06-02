import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	lucideChartArea,
	lucideChevronLeft,
	lucideCircleHelp,
	lucideDatabase,
	lucideFileText,
	lucideFolder,
	lucideInbox,
	lucideSettings,
	lucideUserRoundPlus,
	lucideUsers,
} from '@ng-icons/lucide';
import { type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { SideBarComponent } from './side-bar.component';
import { SideBarService } from './side-bar.service';

const meta: Meta<SideBarComponent> = {
	title: 'Organisms/Side Bar',
	component: SideBarComponent,

	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'A collapsible sidebar navigation component with support for basic links, collapsable sections, and grouped items.',
			},
		},
	},
	decorators: [
		applicationConfig({
			providers: [
				SideBarService,
				provideRouter([]), // Fix router provider error
				provideIcons({
					lucideChartArea,
					lucideInbox,
					lucideSettings,
					lucideUserRoundPlus,
					lucideCircleHelp,
					lucideChevronLeft,
					lucideFolder,
					lucideUsers,
					lucideFileText,
					lucideDatabase,
				}),
			],
		}),
	],
};

export default meta;
type Story = StoryObj<SideBarComponent>;

export const Standard: Story = {
	args: {
		variant: 'default',
		navigation: [
			{
				id: 'dashboard',
				title: 'Dashboard',
				type: 'basic',
				icon: 'lucideChartArea',
			},
			{
				id: 'inbox',
				title: 'Inbox',
				type: 'basic',
				icon: 'lucideInbox',
				badge: { title: '3' },
			},
			{
				id: 'team',
				title: 'Team',
				type: 'basic',
				icon: 'lucideUsers',
			},
			{
				id: 'projects',
				title: 'Projects',
				type: 'basic',
				icon: 'lucideFolder',
			},
		],
		footer: [
			{
				id: 'settings',
				title: 'Settings',
				type: 'basic',
				icon: 'lucideSettings',
			},
			{
				id: 'help',
				title: 'Help',
				type: 'basic',
				icon: 'lucideCircleHelp',
			},
		],
	},
	render: (args) => ({
		props: args,
		template: `
			<div class="h-[720px] flex bg-background">
				<mmc-side-bar class="flex" [variant]="variant" [navigation]="navigation" [footer]="footer">
					<div sidebarcontentheaderexpanded class="flex items-center gap-2">
						<div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
							<span class="text-white font-bold text-sm">M</span>
						</div>
						<div class="flex flex-col">
							<span class="font-semibold text-sm">My App</span>
							<span class="text-xs text-muted-foreground">v1.0.0</span>
						</div>
					</div>
					<div sidebarcontentheadercollapsed class="flex items-center justify-center w-full">
						<div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
							<span class="text-white font-bold text-sm">M</span>
						</div>
					</div>
				</mmc-side-bar>
				<div class="flex-1 p-8 border-l border-border">
					<h1 class="text-2xl font-bold mb-2">Standard Sidebar</h1>
					<p class="text-muted-foreground mb-6">The standard sidebar with collapse toggle, navigation items, and footer actions.</p>
					<div class="space-y-4">
						<div class="p-4 border rounded-lg">
							<h3 class="font-semibold mb-2">✨ Collapsible Design</h3>
							<p class="text-sm text-muted-foreground">Click the collapse button to toggle between expanded and compact views.</p>
						</div>
						<div class="p-4 border rounded-lg">
							<h3 class="font-semibold mb-2">🔔 Notification Badges</h3>
							<p class="text-sm text-muted-foreground">Items can display badges (e.g., "Inbox" shows 3 unread).</p>
						</div>
					</div>
				</div>
			</div>
		`,
	}),
};

export const Simple: Story = {
	args: {
		variant: 'simple',
		navigation: [
			{
				id: 'dashboard',
				title: 'Dashboard',
				type: 'basic',
				icon: 'lucideChartArea',
			},
			{
				id: 'projects',
				title: 'Projects',
				type: 'basic',
				icon: 'lucideFolder',
			},
			{
				id: 'team',
				title: 'Team',
				type: 'basic',
				icon: 'lucideUsers',
			},
			{
				id: 'documents',
				title: 'Documents',
				type: 'basic',
				icon: 'lucideFileText',
				badge: { title: '12' },
			},
		],
		footer: [
			{
				id: 'settings',
				title: 'Settings',
				type: 'basic',
				icon: 'lucideSettings',
			},
		],
	},
	render: (args) => ({
		props: args,
		template: `
			<div class="h-[720px] flex bg-background">
				<mmc-side-bar class="flex" [variant]="variant" [navigation]="navigation" [footer]="footer">
					<div sidebarcontentheaderexpanded class="flex items-center gap-2">
						<div class="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
							<span class="text-white font-bold text-sm">S</span>
						</div>
						<span class="font-semibold">Simple Sidebar</span>
					</div>
					<div sidebarcontentheadercollapsed class="flex items-center justify-center w-full">
						<div class="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
							<span class="text-white font-bold text-sm">S</span>
						</div>
					</div>
				</mmc-side-bar>
				<div class="flex-1 p-8 border-l border-border">
					<h1 class="text-2xl font-bold mb-2">Simple Sidebar Variant</h1>
					<p class="text-muted-foreground mb-6">A simplified sidebar variant with minimal styling.</p>
					<div class="p-4 border rounded-lg">
						<h3 class="font-semibold mb-2">📋 Simple Layout</h3>
						<p class="text-sm text-muted-foreground">The simple variant provides a clean, minimal navigation experience.</p>
					</div>
				</div>
			</div>
		`,
	}),
};
