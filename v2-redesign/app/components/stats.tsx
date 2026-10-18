import { CountUp } from './fx/count-up';
import { Reveal } from './fx/reveal';

const NUMBER_BASE = 'font-semibold tracking-[-0.04em] text-paper';
const NUMBER_CLASS = `text-4xl ${NUMBER_BASE} sm:text-5xl lg:text-6xl`;
const WORD_CLASS = `text-[1.75rem] ${NUMBER_BASE} sm:text-5xl lg:text-6xl`;

const Stats = () => {
  return (
    <section
      aria-label="Resultados da Sara"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20 2xl:max-w-[1440px]"
    >
      <Reveal>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <li className="flex flex-col gap-2">
            <p className={NUMBER_CLASS}>
              <CountUp to={2100} prefix="+" />
            </p>
            <p className="text-base font-semibold text-paper">Alunos</p>
            <p className="text-sm text-mist">Já estudaram com a Sara</p>
          </li>

          <li className="flex flex-col gap-2">
            <p className={NUMBER_CLASS}>
              <CountUp to={5} decimals={1} />
            </p>
            <p className="text-base font-semibold text-paper">Avaliação</p>
            <p className="text-sm text-mist">Nota dada pelos alunos</p>
          </li>

          <li className="flex flex-col gap-2">
            <p className={WORD_CLASS}>Vitalício</p>
            <p className="text-base font-semibold text-paper">Acesso</p>
            <p className="text-sm text-mist">Sem prazo para assistir</p>
          </li>

          <li className="flex flex-col gap-2">
            <p className={NUMBER_CLASS}>
              <CountUp to={7} suffix=" dias" />
            </p>
            <p className="text-base font-semibold text-paper">Garantia</p>
            <p className="text-sm text-mist">Devolvemos 100% do valor</p>
          </li>
        </ul>
      </Reveal>
    </section>
  );
};

export default Stats;
