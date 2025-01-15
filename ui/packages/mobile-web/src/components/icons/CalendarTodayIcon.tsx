import { rem } from '@mantine/core';

interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function CalendarTodayIcon({ size, style, ...props }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...props}
    >
      <path
        d="M9.00369 4C9.00369 3.58579 8.6679 3.25 8.25369 3.25C7.83948 3.25 7.50369 3.58579 7.50369 4H9.00369ZM7.50369 6.81583C7.50369 7.23004 7.83948 7.56583 8.25369 7.56583C8.6679 7.56583 9.00369 7.23004 9.00369 6.81583H7.50369ZM14.972 6.81583C14.972 7.23004 15.3078 7.56583 15.722 7.56583C16.1362 7.56583 16.472 7.23004 16.472 6.81583H14.972ZM16.472 4.00003C16.472 3.58581 16.1362 3.25003 15.722 3.25003C15.3078 3.25003 14.972 3.58581 14.972 4.00003H16.472ZM4.51954 17.1994L5.26954 17.1994L4.51954 17.1994ZM4.51954 7.86398L5.26954 7.86398V7.86398H4.51954ZM7.50369 4V6.81583H9.00369V4H7.50369ZM15.722 5.81336H16.6556V4.31336H15.722V5.81336ZM14.972 5.06336V6.81583H16.472V5.06336H14.972ZM16.472 5.06336V4.00003H14.972V5.06336H16.472ZM3.76954 17.1994C3.76953 19.1603 5.3592 20.75 7.32015 20.75V19.25C6.18763 19.25 5.26953 18.3319 5.26954 17.1994L3.76954 17.1994ZM18.7062 17.1994C18.7062 18.3319 17.7881 19.25 16.6556 19.25V20.75C18.6165 20.75 20.2062 19.1603 20.2062 17.1994H18.7062ZM20.2062 7.86398C20.2062 5.90303 18.6165 4.31336 16.6556 4.31336V5.81336C17.7881 5.81336 18.7062 6.73146 18.7062 7.86398H20.2062ZM5.26954 7.86398C5.26954 6.73146 6.18764 5.81336 7.32016 5.81336V4.31336C5.35921 4.31336 3.76954 5.90303 3.76954 7.86398H5.26954ZM4.51953 10.5831H19.4562V9.08312H4.51953V10.5831ZM18.7062 7.86398V17.1994H20.2062V7.86398H18.7062ZM5.26954 17.1994L5.26954 7.86398L3.76954 7.86398L3.76954 17.1994L5.26954 17.1994ZM7.32016 5.81336H15.722V4.31336H7.32016V5.81336ZM16.6556 19.25H7.32015V20.75H16.6556V19.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CalendarTodayIcon;
