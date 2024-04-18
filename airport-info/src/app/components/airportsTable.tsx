import * as React from 'react';

function AirportsContent({airport}: any) {
    return (
        <tr key={airport.id}>
            <td>
                <a href={`/airports/${airport.id}`}>
                    {airport.code}
                </a>
            </td>
            <td>{airport.name}</td>
            <td>{airport.state}</td>
        </tr>
    )
  }
export default AirportsContent;