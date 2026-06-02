import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { cn } from '../../../../../helpers/cn';
import { MmcBadge } from '../../../../atoms/badge/badge.component';
import { MmcButton } from '../../../../atoms/button/button.component';
import { MmcIcon } from '../../../../atoms/icon/icon.component';
import { MmcTabs } from '../../tabs.component';

@Component({
	selector: 'mmc-tabs-underlined',
	templateUrl: './underlined.component.html',
	imports: [NgClass, MmcButton, MmcIcon, MmcBadge],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderlinedTabsComponent {
	protected readonly tabsCmp = inject(MmcTabs);
	protected readonly cn = cn;

	getTabButtonClasses(index: number): string {
		const isActive = index === this.tabsCmp.activeTabIndex();
		const isVertical =
			this.tabsCmp.orientation() === 'vertical' ||
			this.tabsCmp.orientation() === 'vertical-reverse';

		return cn(
			'transition-all text-sm font-medium relative z-10 rounded-none group hover:bg-transparent h-auto px-0 pt-0',
			isVertical ? 'border-l-2 pl-1 -ml-px' : 'border-b-2 pb-1 -mb-px', // All tabs at same level, overlapping track
			isActive && 'border-foreground text-foreground', // Active state (visible border)
			!isActive && 'border-transparent text-muted-foreground', // Inactive state (transparent border)
		);
	}

	getContainerClasses(): string {
		const isVertical =
			this.tabsCmp.orientation() === 'vertical' ||
			this.tabsCmp.orientation() === 'vertical-reverse';
		return cn(
			this.tabsCmp.tabListClasses(), // Parent's flex + scroll classes
			'w-full relative gap-1',
			isVertical ? 'border-l border-border' : 'border-b border-border',
		);
	}

	getInnerClasses(index: number): string {
		// Enable hover for ALL tabs, including active
		return cn(
			'flex items-center justify-center gap-2 whitespace-nowrap h-7 px-2 rounded-md transition-colors', // Match size="sm": h-7 px-2
			'group-hover:bg-muted group-hover:text-foreground', // Hover effect always applies
		);
	}
}
