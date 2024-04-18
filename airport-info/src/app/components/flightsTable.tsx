import * as React from 'react';

function FlightsContent({flight}: any) {
    return (
        <tr key={flight.id}>
            <td>
                <a href={`/flights/${flight.id}`}>
                    {flight.number}
                </a>
            </td>
            <td>{flight.destination}</td>
            <td>{flight.origin}</td>
            <td>{flight.departureTime}</td>
        </tr>
    )
  }
export default FlightsContent;