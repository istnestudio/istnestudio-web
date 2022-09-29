export interface Select{
  display: string;
  href: string;
}

export const logo = "istnestudio"

const selects: Select[] = [
  { display: "realizacje", href: "/realizacje" },
  { display: "o nas", href: "/o-nas" },
  { display: "kontakt", href: "/kontakt" },
];

export default selects;