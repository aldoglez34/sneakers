import { isEqual } from "lodash";
import { FC } from "react";
import { Button } from "../../../components";

interface MenuProps {
  active?: string | number;
  className?: string;
  label: string;
  onClick: (opt: any) => void;
  options: string[] | number[];
}

export const Menu: FC<MenuProps> = ({
  active,
  className = "",
  label,
  onClick,
  options,
}) => (
  <section className={className}>
    <strong>{label}</strong>
    {options.map((opt) => (
      <Button
        active={isEqual(opt, active)}
        className="d-block"
        key={opt}
        label={String(opt)}
        onClick={() => onClick(opt)}
        type="link"
      />
    ))}
  </section>
);
