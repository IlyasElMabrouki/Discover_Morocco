import { Button } from "src/components/ui/button"
import { CardContent, Card } from "src/components/ui/card"

export function RecommandationCard() {
  return (
    <Card>
      <CardContent className="p-6 grid grid-cols-2">
        <div>
          <h4 className="font-bold">6:00 PM - Networking Reception</h4>
          <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
            Join us for drinks, hors d'oeuvres, and networking with fellow conference attendees.
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button>Add to Calendar</Button>
          <Button>Localisation</Button>
        </div>
      </CardContent>
    </Card>
  )
}
