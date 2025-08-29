"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import sidebarData from "@/data/common/sidebar.json";

export function Sidebar() {
	const pathname = usePathname();
	const { profileData, navigationData } = sidebarData;

	return (
		<div className='space-y-8'>
			{/* Profile Section */}
			<Link href='/'>
				<div className='flex items-center space-x-3'>
					<Image
						src={profileData.avatarSrc}
						alt={profileData.name}
						width={40}
						height={40}
						className='rounded-full'
					/>
					<div>
						<h1 className='font-semibold text-white'>
							{profileData.name}
						</h1>
						<p className='text-sm text-gray-400'>
							{profileData.tagline}
						</p>
					</div>
				</div>
			</Link>

			{/* Navigation */}
			<nav className='space-y-4'>
				{navigationData.map((section: any) => (
					<Section key={section.title} title={section.title}>
						{section.items.map((item: any) => (
							<NavItem
								key={item.href}
								href={item.href}
								label={item.label}
								newBadge={item.newBadge}
								openInNew={item.open_in_new}
								isActive={pathname === item.href}
							/>
						))}
					</Section>
				))}
			</nav>
		</div>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h2 className='text-xs font-semibold uppercase text-gray-400 mb-2'>
				{title}
			</h2>
			<div className='space-y-1'>{children}</div>
		</div>
	);
}

function NavItem({
	href,
	label,
	newBadge,
	openInNew,
	isActive,
}: {
	href: string;
	label: string;
	newBadge?: boolean;
	openInNew?: boolean;
	isActive?: boolean;
}) {
	const isExternal = href.startsWith('http');
	const shouldOpenInNew = openInNew || isExternal;

	return (
		<Link
			href={href}
			target={shouldOpenInNew ? "_blank" : undefined}
			rel={shouldOpenInNew ? "noopener noreferrer" : undefined}
			className={`flex items-center justify-between text-sm px-2 py-1 rounded 
        ${
			isActive
				? "bg-gray-700 text-white font-medium"
				: "text-gray-300 hover:bg-gray-800"
		}
      `}>
			<span>{label}</span>
			{newBadge && (
				<span className='text-xs bg-green-700 text-green-50 px-1.5 rounded'>
					new
				</span>
			)}
		</Link>
	);
}
