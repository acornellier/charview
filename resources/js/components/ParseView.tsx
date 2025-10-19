import type { WclParse } from '@/api/wclChar'
import { SpecIcon } from '@/components/SpecIcon'
import { classColors } from '@/lib/classes'
import { percentileColor } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { rarityColors } from '@/lib/types'

interface Props {
  parse: WclParse
}

export function ParseView({ parse }: Props) {
  const classColor = classColors[parse.class] || '#FFFFFF'

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center justify-between mb-2">
        <div className="flex gap-2">
          <div
            className="font-bold"
            style={{ color: percentileColor(parse.percentile) }}
          >
            {Math.floor(parse.percentile)}
          </div>
          <SpecIcon wowClass={parse.class} spec={parse.spec} size={28} />
          <div className="text-xl" style={{ color: classColor }}>
            {parse.characterName}
          </div>
        </div>
        <a
          className="text-blue-500"
          href={`https://warcraftlogs.com/reports/${parse.reportID}#fight=${parse.fightID}&type=damage-done`}
          target="_blank"
        >
          View in WarcraftLogs
        </a>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-end">ilvl</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Gems</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parse.gear
            .filter((item) => item.id !== 0)
            .map((item) => (
              <TableRow key={item.id}>
                <td className="text-end px-2 py-0.5">{item.itemLevel}</td>
                <td className="px-2 py-0.5">
                  <a
                    className="flex gap-1 cursor-pointer"
                    style={{ color: rarityColors[item.quality] }}
                    href={`https://www.wowhead.com/item=${item.id}?bonus=${item.bonusIDs?.join(':')}`}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </td>
                <td>
                  <div className="flex">
                    {item.gems?.map((gem, idx) => (
                      <a
                        key={idx}
                        className="flex gap-1 cursor-pointer"
                        href={`https://www.wowhead.com/item=${gem.id}`}
                        target="_blank"
                      >
                        {'‎ '}
                      </a>
                    ))}
                  </div>
                </td>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
