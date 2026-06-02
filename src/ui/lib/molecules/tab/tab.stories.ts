import { provideIcons } from '@ng-icons/core';
import {
	lucideBell,
	lucideHouse,
	lucideInbox,
	lucidePencil,
	lucideSettings,
	lucideUser,
} from '@ng-icons/lucide';
import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { MmcTab } from './tab.component';
import { MmcTabs } from './tabs.component';

const meta: Meta<MmcTabs> = {
	title: 'Molecules/Tab',
	component: MmcTabs,

	parameters: {
		layout: 'padded',
	},
	decorators: [
		moduleMetadata({
			imports: [MmcTabs, MmcTab],
			providers: [
				provideIcons({
					lucidePencil,
					lucideHouse,
					lucideSettings,
					lucideUser,
					lucideBell,
					lucideInbox,
				}),
			],
		}),
	],
};

export default meta;
type Story = StoryObj<MmcTabs>;

export const PillHorizontal: Story = {
	render: () => ({
		template: `
			<mmc-tabs variant="pill" class="w-full">
				<mmc-tab name="Dashboard" icon="lucideHouse">
					<p class="p-6">Dashboard content</p>
				</mmc-tab>
				<mmc-tab name="Profile" icon="lucideUser">
					<p class="p-6">Profile content</p>
				</mmc-tab>
				<mmc-tab name="Settings" icon="lucideSettings">
					<p class="p-6">Settings content</p>
				</mmc-tab>
			</mmc-tabs>
		`,
	}),
};

export const PillVertical: Story = {
	render: () => ({
		template: `
			<div class="flex h-[400px]">
				<mmc-tabs orientation="vertical" variant="pill" class="h-full">
					<mmc-tab name="Profile" icon="lucideUser">
						<p class="p-6">Profile content</p>
					</mmc-tab>
					<mmc-tab name="Security">
						<p class="p-6">Security content</p>
					</mmc-tab>
					<mmc-tab name="Notifications" icon="lucideBell">
						<p class="p-6">Notifications content</p>
					</mmc-tab>
					<mmc-tab name="Preferences">
						<p class="p-6">Preferences content</p>
					</mmc-tab>
				</mmc-tabs>
			</div>
		`,
	}),
};

export const UnderlinedHorizontal: Story = {
	render: () => ({
		template: `
			<mmc-tabs variant="underlined" class="w-full">
				<mmc-tab name="Home" icon="lucideHouse">
					<p class="p-6">Home content</p>
				</mmc-tab>
				<mmc-tab name="Notifications" icon="lucideBell" badge="3">
					<p class="p-6">Notifications content</p>
				</mmc-tab>
				<mmc-tab name="Messages" icon="lucideInbox" badge="12">
					<p class="p-6">Messages content</p>
				</mmc-tab>
			</mmc-tabs>
		`,
	}),
};

export const UnderlinedVertical: Story = {
	render: () => ({
		template: `
			<div class="flex h-[400px]">
				<mmc-tabs orientation="vertical" variant="underlined" class="h-full">
					<mmc-tab name="Account" icon="lucideUser">
						<p class="p-6">Account content</p>
					</mmc-tab>
					<mmc-tab name="Password">
						<p class="p-6">Password content</p>
					</mmc-tab>
					<mmc-tab name="Billing" icon="lucideSettings">
						<p class="p-6">Billing content</p>
					</mmc-tab>
				</mmc-tabs>
			</div>
		`,
	}),
};

export const GhostHorizontal: Story = {
	render: () => ({
		template: `
			<mmc-tabs variant="ghost" class="w-full">
				<mmc-tab name="Overview" icon="lucideHouse">
					<p class="p-6">Overview content</p>
				</mmc-tab>
				<mmc-tab name="Activity" icon="lucideBell">
					<p class="p-6">Activity content</p>
				</mmc-tab>
				<mmc-tab name="Settings" icon="lucideSettings">
					<p class="p-6">Settings content</p>
				</mmc-tab>
			</mmc-tabs>
		`,
	}),
};

export const GhostVertical: Story = {
	render: () => ({
		template: `
			<div class="flex h-[400px]">
				<mmc-tabs orientation="vertical" variant="ghost" class="h-full">
					<mmc-tab name="General">
						<p class="p-6">General content</p>
					</mmc-tab>
					<mmc-tab name="Privacy" icon="lucideSettings">
						<p class="p-6">Privacy content</p>
					</mmc-tab>
					<mmc-tab name="Advanced">
						<p class="p-6">Advanced content</p>
					</mmc-tab>
				</mmc-tabs>
			</div>
		`,
	}),
};
